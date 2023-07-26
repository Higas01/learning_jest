
const verificaSaldo = (saldo) => {
    return saldo > 0 ? true : false
}


test("nulo", () => {
    const n = undefined;
    expect(n).not.toBeNull();
    expect(n).not.toBeDefined();
    expect(n).toBeUndefined();
})

test("Pode Sacar", () => {
    expect(verificaSaldo(1500)).toBeTruthy();
})

test("Não pode sacar", () => {
    expect(verificaSaldo(0)).toBeFalsy();
})