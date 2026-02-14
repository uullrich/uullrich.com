defmodule UullrichWeb.MixProject do
  use Mix.Project

  def project do
    [
      app: :uullrich_web,
      version: "0.1.0",
      elixir: "~> 1.14",
      elixirc_paths: elixirc_paths(Mix.env()),
      start_permanent: Mix.env() == :prod,
      aliases: aliases(),
      deps: deps()
    ]
  end

  # Configuration for the OTP application.
  #
  # Type `mix help compile.app` for more information.
  def application do
    [
      mod: {UullrichWeb.Application, []},
      extra_applications: [:logger, :runtime_tools]
    ]
  end

  # Specifies which paths to compile per environment.
  defp elixirc_paths(:test), do: ["lib", "test/support"]
  defp elixirc_paths(_), do: ["lib"]

  # Specifies your project dependencies.
  #
  # Type `mix help deps` for examples and options.
  defp deps do
    [
      {:phoenix, github: "phoenixframework/phoenix", tag: "v1.7.14", override: true},
      {:phoenix_html, github: "phoenixframework/phoenix_html", tag: "v4.1.1", override: true},
      {:phoenix_template, github: "phoenixframework/phoenix_template", tag: "v1.0.4", override: true},
      {:phoenix_pubsub, github: "phoenixframework/phoenix_pubsub", tag: "v2.1.3", override: true},
      {:phoenix_live_view, github: "phoenixframework/phoenix_live_view", tag: "v0.20.17", override: true},
      {:phoenix_live_reload, github: "phoenixframework/phoenix_live_reload", tag: "v1.5.3", override: true, only: :dev},
      {:floki, github: "philss/floki", tag: "v0.36.2", override: true, only: :test},
      {:esbuild, github: "phoenixframework/esbuild", tag: "v0.8.2", override: true, runtime: Mix.env() == :dev},
      {:tailwind, github: "phoenixframework/tailwind", tag: "v0.2.4", override: true, runtime: Mix.env() == :dev},
      {:heroicons,
       github: "tailwindlabs/heroicons",
       tag: "v2.1.1",
       sparse: "optimized",
       app: false,
       compile: false,
       depth: 1},
      {:telemetry, github: "beam-telemetry/telemetry", tag: "v1.3.0", override: true},
      {:telemetry_metrics, github: "beam-telemetry/telemetry_metrics", tag: "v1.0.0", override: true},
      {:telemetry_poller, github: "beam-telemetry/telemetry_poller", tag: "v1.1.0", override: true},
      {:jason, github: "michalmuskala/jason", tag: "v1.4.4", override: true},
      {:dns_cluster, github: "phoenixframework/dns_cluster", tag: "v0.1.3", override: true},
      {:bandit, github: "mtrudel/bandit", tag: "1.5.7", override: true},
      {:plug, github: "elixir-plug/plug", tag: "v1.16.1", override: true},
      {:plug_crypto, github: "elixir-plug/plug_crypto", tag: "v2.1.0", override: true},
      {:websock_adapter, github: "phoenixframework/websock_adapter", tag: "0.5.7", override: true},
      {:websock, github: "phoenixframework/websock", tag: "0.5.3", override: true},
      {:thousand_island, github: "mtrudel/thousand_island", tag: "1.3.5", override: true},
      {:hpax, github: "elixir-mint/hpax", tag: "v1.0.0", override: true},
      {:mime, github: "elixir-plug/mime", tag: "v2.0.6", override: true},
      {:castore, github: "elixir-mint/castore", tag: "v1.0.9", override: true},
      {:file_system, github: "falood/file_system", tag: "v1.0.1", override: true, only: :dev}
    ]
  end

  # Aliases are shortcuts or tasks specific to the current project.
  # For example, to install project dependencies and perform other setup tasks, run:
  #
  #     $ mix setup
  #
  # See the documentation for `Mix` for more info on aliases.
  defp aliases do
    [
      setup: ["deps.get", "assets.setup", "assets.build"],
      "assets.setup": ["tailwind.install --if-missing", "esbuild.install --if-missing"],
      "assets.build": ["tailwind uullrich_web", "esbuild uullrich_web"],
      "assets.deploy": [
        "tailwind uullrich_web --minify",
        "esbuild uullrich_web --minify",
        "phx.digest"
      ]
    ]
  end
end
