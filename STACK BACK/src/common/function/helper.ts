const initialState = [0, 0, 0, 0, 0];
export const generateRecovery = (): number => {
  const recoveryString = initialState.map(value => value + Math.floor(Math.random() * 9)).join('');
  return parseInt(recoveryString, 10)
}