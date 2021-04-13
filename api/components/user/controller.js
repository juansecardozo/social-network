const { v4: uuidv4 } = require("uuid");
const ValidationError = require("../../../errors/ValidationError");

const TABLE = "users";
const CTRL_NAME = "messageController";

module.exports = (injectedStore) => {
    let store = injectedStore;
    if (!store) {
        store = require("../../../store/dummy");
    }

    const list = () => {
        return store.list(TABLE);
    };

    const get = (id) => {
        return store.get(TABLE, id);
    };

    const add = (name) => {
        return new Promise((resolve, reject) => {
            let errors = [];
            if (!name) {
                console.error(`[${CTRL_NAME}] No name`);
                errors.push({ name: "Name is required" });
            }
            if (errors.length) {
                return reject(new ValidationError(errors));
            }

            let newUser = {
                id: uuidv4(),
                name,
            };

            store
                .upsert(TABLE, newUser)
                .then((user) => {
                    resolve(user);
                })
                .catch((e) => {
                    reject(e);
                });
        });
    };

    return {
        list,
        get,
        add,
    };
};
