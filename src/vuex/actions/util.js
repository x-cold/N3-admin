export const makeAction = type => {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}
