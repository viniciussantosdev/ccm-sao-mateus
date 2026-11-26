
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

        {/* Logo e nome */}
        <div className="flex h-14 items-center justify-center sm:justify-between">
          <Link to="/" className="flex items-center justify-center gap-2">
            <img
              src={simbolo}
              alt=""
              className="h-8 w-auto shrink-0"
            />

            <span className="hidden text-xl font-extrabold tracking-tight text-white sm:inline">
              Casa De Cultura <span className="text-destaque">São Mateus</span>
            </span>
          </Link>

          {/* Login e saudação no computador */}
          <div className="hidden shrink-0 items-center gap-4 sm:flex">
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

        {/* Navegação */}
        <nav className="flex min-h-11 flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-neutral-800 py-3 text-xs sm:min-h-0 sm:flex-nowrap sm:justify-end sm:gap-6 sm:border-0 sm:py-0 sm:pb-3 sm:text-sm">

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

          {/* Login e saída somente no celular */}
          <div className="flex shrink-0 items-center gap-3 sm:hidden">
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
          </div>
        </nav>
      </div>
    </header>
  )
}
