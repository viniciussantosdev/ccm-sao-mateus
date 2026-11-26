import { Link, NavLink, useNavigate } from 'react-router'
import simbolo from '../assets/ccaimagemmenor.png'
import { useAuth } from '../context/AuthContext'

export default function Cabecalho() {
  const { usuario, autenticado, isAdmin, logout } = useAuth()
  const navegar = useNavigate()

  const link = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'whitespace-nowrap font-semibold text-destaque'
      : 'whitespace-nowrap text-texto-suave hover:text-destaque'

  function sair() {
    logout()
    navegar('/')
  }

  return (
    <header className="border-b border-neutral-800 bg-fundo text-texto">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-5">

        {/* Cabeçalho para computador */}
        <div className="hidden min-h-16 items-center justify-between gap-6 lg:flex">

          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-center gap-2">
            <img
              src={simbolo}
              alt=""
              className="h-8 w-auto"
            />

            <span className="whitespace-nowrap text-xl font-extrabold tracking-tight text-white">
              Casa De Cultura <span className="text-destaque">São Mateus</span>
            </span>
          </Link>

          {/* Navegação, saudação e acesso na mesma linha */}
          <div className="flex min-w-0 items-center justify-end gap-6">

            <nav className="flex shrink-0 items-center gap-6 text-sm">
              <NavLink to="/" end className={link}>
                Eventos
              </NavLink>

              <NavLink to="/sobre" className={link}>
                Sobre nós
              </NavLink>

              {autenticado && !isAdmin && (
                <NavLink to="/meus-eventos" className={link}>
                  Meus Eventos
                </NavLink>
              )}

              {autenticado && isAdmin && (
                <NavLink to="/admin" className={link}>
                  Administrador
                </NavLink>
              )}
            </nav>

            {autenticado && (
              <span className="whitespace-nowrap text-sm text-texto-suave">
                Olá, {usuario?.nome || usuario?.email || 'usuário'}!
              </span>
            )}

            {autenticado ? (
              <button
                type="button"
                onClick={sair}
                className="whitespace-nowrap rounded border-2 border-destaque px-3 py-1 font-semibold text-destaque hover:bg-destaque hover:text-black"
              >
                Sair
              </button>
            ) : (
              <Link
                to="/login"
                className="whitespace-nowrap rounded border-2 border-destaque px-3 py-1 font-semibold text-destaque hover:bg-destaque hover:text-black"
              >
                Entrar
              </Link>
            )}
          </div>
        </div>

        {/* Cabeçalho para celular e telas menores */}
        <div className="lg:hidden">

          {/* Logo centralizada */}
          <div className="flex h-14 items-center justify-center">
            <Link to="/" className="flex items-center justify-center gap-2">
              <img
                src={simbolo}
                alt=""
                className="h-8 w-auto shrink-0"
              />
            </Link>
          </div>

          {/* Navegação abaixo da logo */}
          <nav className="flex min-h-11 flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-neutral-800 py-3 text-xs">

            <NavLink to="/" end className={link}>
              Eventos
            </NavLink>

            <NavLink to="/sobre" className={link}>
              Sobre nós
            </NavLink>

            {autenticado && !isAdmin && (
              <NavLink to="/meus-eventos" className={link}>
                Meus Eventos
              </NavLink>
            )}

            {autenticado && isAdmin && (
              <NavLink to="/admin" className={link}>
                Administrador
              </NavLink>
            )}

            {autenticado ? (
              <button
                type="button"
                onClick={sair}
                className="whitespace-nowrap font-semibold text-destaque"
              >
                Sair
              </button>
            ) : (
              <Link
                to="/login"
                className="whitespace-nowrap font-semibold text-destaque"
              >
                Entrar
              </Link>
            )}
          </nav>
        </div>

      </div>
    </header>
  )
}