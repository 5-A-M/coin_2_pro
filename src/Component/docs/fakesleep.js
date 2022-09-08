export default async function fakesleep(ms) {
    return new Promise(rel=> setTimeout(rel, ms))
}  