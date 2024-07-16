export const seo = {
  title: '范小兵 | 独立开发者、创业，奶爸',
  description:
    '我叫 范小兵，一名独立开发者，正在创业，同时也是一位奶爸',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://xiaobingkj.com'
      : 'http://localhost:3000'
  ),
} as const
