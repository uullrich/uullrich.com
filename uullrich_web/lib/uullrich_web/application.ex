defmodule UullrichWeb.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      UullrichWebWeb.Telemetry,
      {DNSCluster, query: Application.get_env(:uullrich_web, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: UullrichWeb.PubSub},
      # Start a worker by calling: UullrichWeb.Worker.start_link(arg)
      # {UullrichWeb.Worker, arg},
      # Start to serve requests, typically the last entry
      UullrichWebWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: UullrichWeb.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    UullrichWebWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
