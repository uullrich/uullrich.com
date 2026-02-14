defmodule UullrichWebWeb.PageController do
  use UullrichWebWeb, :controller

  def home(conn, _params) do
    conn
    |> assign(:nav_transparent, false)
    |> assign(:small_logo, false)
    |> render(:home)
  end
end
