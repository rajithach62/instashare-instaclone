import {Link, withRouter} from 'react-router-dom'

import {FaSearch} from 'react-icons/fa'
import {GoThreeBars} from 'react-icons/go'
import {AiFillCloseCircle} from 'react-icons/ai'
import Cookies from 'js-cookie'
import SearchContext from '../../SearchContext/index'
import './index.css'

const Header = props => (
  <SearchContext.Consumer>
    {value => {
      const {
        searchInput,
        click,
        onChangeSearchInput,
        onEmptyInput,
        setSearchInput,
        onMoreOptionsState,
        searchBox,
        searchValue,
        closeHeaderButtonIn,
      } = value

      const onLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const closeHeaderButton = () => {
        closeHeaderButtonIn()
      }

      const onMoreOptions = () => {
        onMoreOptionsState()
      }

      const ChangeSearchInput = event => {
        onChangeSearchInput(event.target.value)
      }

      const emptyInput = event => {
        onEmptyInput(event.target.value)
      }

      const onsetSearchInput = () => {
        setSearchInput()
      }

      const searchContainerView = () => {
        searchBox()
      }

      const searchBoxContainer = () => (
        <div className="input-container">
          <input
            className="search-input"
            type="search"
            placeholder="Search Caption"
            onChange={ChangeSearchInput}
            value={searchInput}
            onKeyDown={emptyInput}
          />
          <button className="button-s" type="button" onClick={onsetSearchInput}>
            <FaSearch className="search-icon" />
          </button>
        </div>
      )

      const onMoreOptionELe = () => (
        <div className="options-container">
          <ul className="header-links">
            <li className="link-tag">
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <button
              className="search-option"
              type="button"
              onClick={searchContainerView}
            >
              Search
            </button>
            <li className="link-tag">
              <Link to="/my-profile" className="link">
                Profile
              </Link>
            </li>
          </ul>
          <button className="logout-button" type="button" onClick={onLogout}>
            Logout
          </button>
          <button
            className="close-button"
            type="button"
            onClick={closeHeaderButton}
          >
            <AiFillCloseCircle className="close-button" />
          </button>
        </div>
      )

      return (
        <>
          <nav className="nav-header">
            <div className="img-name">
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/dxmoaodao/image/upload/v1673252629/Group_lbr9pm.png"
                  alt="website logo"
                  className="header-img"
                />
              </Link>
              <h1 className="header-head">Insta Share</h1>
            </div>
            <div className="right-side">
              <div className="input-container">
                <input
                  className="search-input"
                  type="search"
                  placeholder="Search Caption"
                  onChange={ChangeSearchInput}
                  value={searchInput}
                  onKeyDown={emptyInput}
                />
                <button
                  className="button-s"
                  type="button"
                  onClick={onsetSearchInput}
                >
                  <FaSearch className="search-icon" />
                </button>
              </div>
              <ul className="header-links">
                <li className="link-tag">
                  <Link to="/" className="link">
                    Home
                  </Link>
                </li>
                <li className="link-tag">
                  <Link to="/my-profile" className="link">
                    Profile
                  </Link>
                </li>
              </ul>
              <button
                className="logout-button"
                type="button"
                onClick={onLogout}
              >
                Logout
              </button>
            </div>
            <div className="medium-view">
              <button
                className="med-button"
                type="button"
                onClick={onMoreOptions}
              >
                <GoThreeBars className="more-img" />
              </button>
            </div>
          </nav>
          {click && onMoreOptionELe()}
          {searchValue && searchBoxContainer()}
        </>
      )
    }}
  </SearchContext.Consumer>
)

export default withRouter(Header)
