const add = (a, b) => a + b;
const generateGreetings = (name = 'Anonynous') => `Hello ${name}!`

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
})

test('should generate greeting from name', () => {
    const result = generateGreetings('Mike')
    expect(result).toBe('Hello Mike!')
})

test('should generate greeting from no name', () => {
    const result = generateGreetings()
    expect(result).toBe('Hello Anonynous!')
})