defmodule UullrichWebWeb.BlogController do
  use UullrichWebWeb, :controller

  def index(conn, _params) do
    conn
    |> assign(:nav_transparent, false)
    |> assign(:small_logo, true)
    |> render(:index)
  end

  def show(conn, %{"slug" => slug}) do
    conn
    |> assign(:nav_transparent, false)
    |> assign(:small_logo, true)
    |> assign(:slug, slug)
    |> render(:show)
  end
end
