export const getUserList = async () => {
    const data = await (
        await fetch('https://api.jsonbin.io/v3/b/640c6216c0e7653a0586148b')
    ).json();
    return data.record.schema;
}
