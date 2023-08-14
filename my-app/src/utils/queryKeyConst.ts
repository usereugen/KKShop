type queryKeyType = (string | undefined)[]
export default {
    users: (): queryKeyType => ["users"],
    product: (): queryKeyType => ["product"],
};