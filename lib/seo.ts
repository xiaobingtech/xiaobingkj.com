export const seo = {
  title: '范小兵 | 独立开发者',
  description:
    '我叫范小兵，自认为是独立开发者，探寻极简创业之道，致力于持续创造出优秀作品，目前专注移动端应用开发，我热爱开发，喜欢创新和探索新事物，期待与大家有深度交流',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://xiaobingkj.com'
      : 'http://localhost:3000'
  ),
} as const
