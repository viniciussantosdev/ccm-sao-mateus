import { Link, NavLink, useNavigate } from 'react-router'
import simbolo from '../assets/ccaimagemmenor.png'
import { useAuth } from '../context/AuthContext'

export default function Cabecalho() {
  const { usuario, autenticado, isAdmin, logout } = useAuth()
  const navegar = useNavigate()

  const link = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'font-semibold text-destaque'
      : 'text-texto-suave hover:text-destaque'

  function sair() {
    logout()
    navegar('/')
  }

  return (
    <header className="border-b border-neutral-800 bg-fundo text-texto">
      <div className="mx-auto max-w-5xl px-4 sm:px-5">

        {/* Logo e nome */}
        <div className="flex h-14 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
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
          <div className="hidden items-center gap-4 sm:flex">
            {autenticado && (
              <span className="text-sm text-texto-suave">
                Olá, {usuario?.nome || usuario?.email || 'usuário'}!
              </span>
            )}

            {autenticado ? (
              <button
                type="button"
                onClick={sair}
                className="rounded border-2 border-destaque px-3 py-1 font-semibold text-destaque hover:bg-destaque hover:text-black"
              >
                Sair
              </button>
            ) : (
              <Link
                to="/login"
                className="rounded border-2 border-destaque px-3 py-1 font-semibold text-destaque hover:bg-destaque hover:text-black"
              >
                Entrar
              </Link>
            )}
          </div>
        </div>

        {/* Navegação */}
        <nav className="flex min-h-11 items-center justify-center gap-6 border-t border-neutral-800 text-sm sm:min-h-0 sm:justify-end sm:border-0 sm:pb-3">
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

          <div className="flex items-center gap-3 sm:hidden">
            {autenticado ? (
              <button
                type="button"
                onClick={sair}
                className="font-semibold text-destaque"
              >
                Sair
              </button>
            ) : (
              <Link to="/login" className="font-semibold text-destaque">
                Entrar
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
