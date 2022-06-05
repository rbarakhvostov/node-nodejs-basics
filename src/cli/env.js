export const parseEnv = () => {
  const env = process.env
  const envVars = []

  for (const k in env) {
    if (k.startsWith('RSS_')) {
      envVars.push(`${k}=${env[k]}`)
    }
  }

  console.log(envVars.join('; '))
};

parseEnv()
