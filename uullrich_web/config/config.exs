import Config

config :uullrich_web, UullrichWebWeb.Endpoint,
  url: [host: "localhost"],
  adapter: Bandit.PhoenixAdapter,
  render_errors: [
    formats: [html: UullrichWebWeb.ErrorHTML, json: UullrichWebWeb.ErrorJSON],
    layout: false
  ],
  pubsub_server: UullrichWeb.PubSub

config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

config :phoenix, :json_library, Jason

import_config "#{config_env()}.exs"
