import Big from 'big.js'

/**
 * @description 加法
 * @param  {...any} args 
 * @returns number
 */
export const plus = (...args) => {
  if (args.length < 2) return args[0]
  return args.reduce((sum, num) => {
    return new Big(sum).plus(num).toNumber();
  }, 0);
};

/**
 * @description 减法
 * @param  {...any} args 
 * @returns number
 */
export const minus = (...args) => {
  if (args.length < 2) return args[0]
  let index = 0;
  let ins = new Big(args[0]);
  while(++index < args.length) {
    ins = ins.minus(args[index]);
  }
  return ins.toNumber();
};

/**
 * @description 乘法
 * @param  {...any} args 
 * @returns number
 */
export const times = (...args) => {
  if (args.length < 2) return args[0]
  return args.reduce((sum, num) => {
    return new Big(sum).times(num).toNumber()
  }, 1);
}

/**
 * @description 除法
 * @param  {...any} args 
 * @returns number
 */
export const div = (...args) => {
  if (args.length < 2) return args[0]
  let index = 0;
  let ins = new Big(args[0]);
  while(++index < args.length) {
    ins = ins.div(args[index]);
  }
  return ins.toNumber();
}