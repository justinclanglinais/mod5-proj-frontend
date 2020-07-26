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

const addSession = (session) => {
    return fetch(`${API_ROOT}/sessions`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(session)
    })
    .then(res=>res.json())
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

export const Api = {
    auth: {
        login,
        getCurrentUser
    },
    sessions: {
        fetchSessions,
        addSession
    },
    users: {
        fetchUsers
    },
    topics: {
        fetchTopics
    },
    categories: {
        fetchCategories
    },
    enrollments: {
        addEnrollment
    }
}