const db = {
    users: [
        {
            id: 1,
            name: "Pepe",
        },
        {
            id: 2,
            name: "John",
        },
    ],
};

const list = async (table) => {
    return db[table];
};
const get = async (table, id) => {
    let collection = await list(table);
    return collection.filter((item) => item.id == id)[0] || null;
};
const upsert = async (table, data) => {
    db[table].push(data);
    return data;
};
const remove = async (table, id) => {
    return true;
};

module.exports = {
    list,
    get,
    upsert,
    remove,
};
