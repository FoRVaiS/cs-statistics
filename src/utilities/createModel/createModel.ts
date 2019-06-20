import mongoose from 'mongoose';

type TModel = mongoose.Model<mongoose.Document, {}>;
type TCustomSchema<TSchema> = {
    [key in keyof TSchema]: mongoose.SchemaTypeOpts<any> | mongoose.Schema | mongoose.SchemaType
}
interface IModelBase<TSchema> {
    model: TModel
    create: (properties: TSchema) => mongoose.Document
}

// eslint-disable-next-line arrow-parens
export const createModel = <TSchema> (
    collection: string,
    schema: TCustomSchema<TSchema>,
): (database: mongoose.Connection) => IModelBase<TSchema> => {
    let model: TModel | null = null;

    const getModel = (database: mongoose.Connection): TModel => {
        if (model === null) {
            model = database.model(collection, new mongoose.Schema(schema));
        }

        return model;
    };

    return (database: mongoose.Connection): IModelBase<TSchema> => ({
        model: getModel(database),
        create: (properties: TSchema): mongoose.Document => {
            const ModelInstance = getModel(database);

            return new ModelInstance(properties);
        },
    });
};
