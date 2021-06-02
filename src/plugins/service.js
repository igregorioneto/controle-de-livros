import axios from 'axios'

const getReservas = async () => {
    const resp = await axios.get('http://localhost:3000/reservas')
    return resp.data
}

const getUsuarios = async () => {
    const resp = await axios.get('http://localhost:3000/usuario')
    return resp.data
}

const getLivros = async () => {
    const resp = await axios.get('http://localhost:3000/livros')
    return resp.data
}

export {
    getReservas,
    getUsuarios,
    getLivros
}