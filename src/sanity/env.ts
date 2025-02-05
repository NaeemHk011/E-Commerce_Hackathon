export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-10'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skFWUUDg214ubgfu24h4w8OwIcl0rjpdnXFE7l9ItEqzcip95SwEEVY31wIg8rAeB971WyDR02pnOFNYgQyTNTsUzc7PkofMs8i001XwCnN6hLkebtVL2eYTsQLBc2qBK0VyJZ98S355TYfQ8yLD5Hi2IEUIiXqYKf39fKY3d2YOhkWAjqqR",
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
