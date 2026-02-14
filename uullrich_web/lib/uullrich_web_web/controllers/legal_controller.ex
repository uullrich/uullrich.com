defmodule UullrichWebWeb.LegalController do
  use UullrichWebWeb, :controller

  def index(conn, _params) do
    conn
    |> assign(:nav_transparent, false)
    |> assign(:small_logo, true)
    |> render(:index)
  end
end
