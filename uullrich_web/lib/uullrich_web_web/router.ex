defmodule UullrichWebWeb.Router do
  use UullrichWebWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :put_root_layout, html: {UullrichWebWeb.Layouts, :root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  scope "/", UullrichWebWeb do
    pipe_through :browser

    get "/", PageController, :home
    get "/blog", BlogController, :index
    get "/blog/:slug", BlogController, :show
    get "/contact", ContactController, :index
    get "/legal", LegalController, :index
  end
end
