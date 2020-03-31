import database from './database'
import app from './app'

export default async function initApp({ PORT, DATABASE_URL }) {
    try {
        if (!DATABASE_URL) {
            const err = new Error(
                'Environment Variable "DATABASE_URL" has not been set.'
            )
            throw err
        }
        await database.initialize(DATABASE_URL)
        console.log('Successfully connected to database')

        app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
    } catch (error) {
        console.log('Failed to initialize')
        console.error(error)
    }
}