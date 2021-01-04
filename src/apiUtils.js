const BASE_ENDPOINT = 'https://5fd7e59c9dd0db0017ee9d3c.mockapi.io/api/v1/tasks/'


export const todoServerAPI = {

    getData: async () => {
        const data = await fetch(BASE_ENDPOINT)
        return data.json();
    },

    postTask: async (body) => {
        let response = await fetch(BASE_ENDPOINT, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        })
        return response
    },

    deleteTask: async (id) => {
        let response = await fetch(BASE_ENDPOINT + id, {
            method: 'DELETE',
        })
        return response
    },

    putTask: async (id, body) => {
        await fetch(BASE_ENDPOINT + id, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        })
    }


}

export const postTask = async (header, isCompleted = false, description = '') => {
    const body = { isCompleted: isCompleted, title: header, description: description }
    return await todoServerAPI.postTask(body)
}

export const putTask = async (id, header, isCompleted, description) => {
    const body = { id: id, isCompleted: isCompleted, title: header, description: description }
    return await todoServerAPI.putTask(id, body)
}