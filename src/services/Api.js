// const API_ROOT = `justin-jitsu-backend.herokuapp.com`
const API_ROOT = `http://localhost:3000`

const headers = {
    'Content-Type' : 'application/json',
    Accepts : 'application/json',
}

const fetchSessions = () => {
    return fetch(`${API_ROOT}/sessions`).then(r=>r.json())
}
const fetchUsers = () => {
    return fetch(`${API_ROOT}/api/v1/users`).then(r=>r.json())
}
const fetchTopics = () => {
    return fetch(`${API_ROOT}/topics`).then(r=>r.json())
}
const fetchCategories = () => {
    return fetch(`${API_ROOT}/categories`).then(r=>r.json())
}

const login = (data) => {
    return fetch(`${API_ROOT}/api/v1/login`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    })
    .then(res=>res.json())
}

const getCurrentUser = () => {
    const token = localStorage.getItem('token')
    return fetch(`${API_ROOT}/api/v1/current_user`, {
        headers: { Authorization: token }
    })
    .then(res=>res.json())
}

const addUser = (user) => {
    return fetch(`${API_ROOT}/api/v1/users`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(user)
    })
    .then(res=>res.json())
}
const addSession = (session) => {
    return fetch(`${API_ROOT}/sessions`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(session)
    })
    .then(res=>res.json())
}
const deleteSession = (id) => {
    return fetch(`${API_ROOT}/sessions/${id}`, {
        method: 'DELETE'
    })
}

const addEnrollment = (sessionId, loggedUserId) => {
    return fetch(`${API_ROOT}/enrollments`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            user_id: loggedUserId,
            session_id: sessionId
        })
    })
    .then(res=>res.json())
}

const deleteEnrollment = (id) => {
    return fetch(`${API_ROOT}/enrollments/${id}`, {
        method: 'DELETE'
    })
}

export const Api = {
    auth: {
        login,
        getCurrentUser
    },
    sessions: {
        fetchSessions,
        addSession,
        deleteSession
    },
    users: {
        fetchUsers,
        addUser
    },
    topics: {
        fetchTopics
    },
    categories: {
        fetchCategories
    },
    enrollments: {
        addEnrollment,
        deleteEnrollment
    }
}