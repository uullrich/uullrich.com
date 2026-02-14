import Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :uullrich_web, UullrichWebWeb.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4002],
  secret_key_base: "B/KIxhjLWCPD+xL//AE2zWHp8ISXCPKCAUHcOrIfYeE9Y+cfDObcO5N0gprdIsTj",
  server: false

# Print only warnings and errors during test
config :logger, level: :warning

# Initialize plugs at runtime for faster test compilation
config :phoenix, :plug_init_mode, :runtime

# Enable helpful, but potentially expensive runtime checks
config :phoenix_live_view,
  enable_expensive_runtime_checks: true
