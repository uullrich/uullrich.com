defmodule UullrichWebWeb.Endpoint do
  use Phoenix.Endpoint, otp_app: :uullrich_web

  @session_options [
    store: :cookie,
    key: "_uullrich_web_key",
    signing_salt: "Rk3gZ7xP",
    same_site: "Lax"
  ]

  plug Plug.Static,
    at: "/",
    from: :uullrich_web,
    gzip: false,
    only: UullrichWebWeb.static_paths()

  if code_reloading? do
    plug Phoenix.CodeReloader
  end

  plug Plug.RequestId
  plug Plug.Telemetry, event_prefix: [:phoenix, :endpoint]

  plug Plug.Parsers,
    parsers: [:urlencoded, :multipart, :json],
    pass: ["*/*"],
    json_decoder: Phoenix.json_library()

  plug Plug.MethodOverride
  plug Plug.Head
  plug Plug.Session, @session_options
  plug UullrichWebWeb.Router
end
