const users = [];

const addUser = ({ id, name, room }) => {
    //Tratando strings
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // Verificando se já existe o usuário enviado
    const existingUser = users.find(user => user.room === room && user.name === name);

    if(existingUser){
        return { error: 'Nome já utilizado' };
    }

    // Criando usuário
    const user = { id, name, room };
    users.push(user);

    return { user };
}

const removeUser = id => {
    // Verifica se o usuário existe no array
    const index = users.findIndex(user => user.id === id);

    if(index !== -1){
        return users.splice(index, 1)[0]; // Array sem o usuário do index determinado
    }
}

const getUser = id => users.find(user => user.id === id); 

const getUsersInRoom = room => users.filter(user => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom }