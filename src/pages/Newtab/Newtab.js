import React from 'react';
import logo from '../../assets/img/logo.png';
import './Newtab.css';
import './Newtab.scss';
import Next from './components/Next';
import Progress from './components/Progress';
import Resources from './components/Resources';
import Schedule from './components/Schedule';
import { fade, makeStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
var useStyles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e;
    return createStyles({
        grow: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: (_a = {
                display: 'none'
            },
            _a[theme.breakpoints.up('sm')] = {
                display: 'block',
            },
            _a),
        search: (_b = {
                position: 'relative',
                borderRadius: theme.shape.borderRadius,
                backgroundColor: fade(theme.palette.common.white, 0.15),
                '&:hover': {
                    backgroundColor: fade(theme.palette.common.white, 0.25),
                },
                marginRight: theme.spacing(2),
                marginLeft: 0,
                width: '100%'
            },
            _b[theme.breakpoints.up('sm')] = {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
            _b),
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: (_c = {
                padding: theme.spacing(1, 1, 1, 0),
                // vertical padding + font size from searchIcon
                paddingLeft: "calc(1em + " + theme.spacing(4) + "px)",
                transition: theme.transitions.create('width'),
                width: '100%'
            },
            _c[theme.breakpoints.up('md')] = {
                width: '20ch',
            },
            _c),
        sectionDesktop: (_d = {
                display: 'none'
            },
            _d[theme.breakpoints.up('md')] = {
                display: 'flex',
            },
            _d),
        sectionMobile: (_e = {
                display: 'flex'
            },
            _e[theme.breakpoints.up('md')] = {
                display: 'none',
            },
            _e),
    });
});
var Newtab = function () {
    var classes = useStyles();
    var _a = React.useState(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var _b = React.useState(null), mobileMoreAnchorEl = _b[0], setMobileMoreAnchorEl = _b[1];
    var isMenuOpen = Boolean(anchorEl);
    var isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    var handleProfileMenuOpen = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleMobileMenuClose = function () {
        setMobileMoreAnchorEl(null);
    };
    var handleMenuClose = function () {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    var handleMobileMenuOpen = function (event) {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    var menuId = 'primary-search-account-menu';
    var renderMenu = (React.createElement(Menu, { anchorEl: anchorEl, anchorOrigin: { vertical: 'top', horizontal: 'right' }, id: menuId, keepMounted: true, transformOrigin: { vertical: 'top', horizontal: 'right' }, open: isMenuOpen, onClose: handleMenuClose },
        React.createElement(MenuItem, { onClick: handleMenuClose }, "Profile"),
        React.createElement(MenuItem, { onClick: handleMenuClose }, "My account")));
    var mobileMenuId = 'primary-search-account-menu-mobile';
    var renderMobileMenu = (React.createElement(Menu, { anchorEl: mobileMoreAnchorEl, anchorOrigin: { vertical: 'top', horizontal: 'right' }, id: mobileMenuId, keepMounted: true, transformOrigin: { vertical: 'top', horizontal: 'right' }, open: isMobileMenuOpen, onClose: handleMobileMenuClose },
        React.createElement(MenuItem, null,
            React.createElement(IconButton, { "aria-label": "show 4 new mails", color: "inherit" },
                React.createElement(Badge, { badgeContent: 4, color: "secondary" },
                    React.createElement(MailIcon, null))),
            React.createElement("p", null, "Messages")),
        React.createElement(MenuItem, null,
            React.createElement(IconButton, { "aria-label": "show 11 new notifications", color: "inherit" },
                React.createElement(Badge, { badgeContent: 11, color: "secondary" },
                    React.createElement(NotificationsIcon, null))),
            React.createElement("p", null, "Notifications")),
        React.createElement(MenuItem, { onClick: handleProfileMenuOpen },
            React.createElement(IconButton, { "aria-label": "account of current user", "aria-controls": "primary-search-account-menu", "aria-haspopup": "true", color: "inherit" },
                React.createElement(AccountCircle, null)),
            React.createElement("p", null, "Profile"))));
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement("div", { className: classes.grow },
                React.createElement(AppBar, { position: "static" },
                    React.createElement(Toolbar, null,
                        React.createElement(IconButton, { edge: "start", className: classes.menuButton, color: "inherit", "aria-label": "open drawer" },
                            React.createElement("img", { src: logo, className: "App-logo", alt: "logo" })),
                        React.createElement("div", { className: classes.search },
                            React.createElement("div", { className: classes.searchIcon },
                                React.createElement(SearchIcon, null)),
                            React.createElement(InputBase, { placeholder: "Search\u2026", classes: {
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }, inputProps: { 'aria-label': 'search' } })),
                        React.createElement("div", { className: classes.grow }),
                        React.createElement("div", { className: classes.sectionDesktop },
                            React.createElement(IconButton, { "aria-label": "show 4 new mails", color: "inherit" },
                                React.createElement(Badge, { badgeContent: 4, color: "secondary" },
                                    React.createElement(MailIcon, null))),
                            React.createElement(IconButton, { "aria-label": "show 17 new notifications", color: "inherit" },
                                React.createElement(Badge, { badgeContent: 17, color: "secondary" },
                                    React.createElement(NotificationsIcon, null))),
                            React.createElement(IconButton, { edge: "end", "aria-label": "account of current user", "aria-controls": menuId, "aria-haspopup": "true", onClick: handleProfileMenuOpen, color: "inherit" },
                                React.createElement(AccountCircle, null))),
                        React.createElement("div", { className: classes.sectionMobile },
                            React.createElement(IconButton, { "aria-label": "show more", "aria-controls": mobileMenuId, "aria-haspopup": "true", onClick: handleMobileMenuOpen, color: "inherit" },
                                React.createElement(MoreIcon, null))))),
                renderMobileMenu,
                renderMenu)),
        React.createElement("div", { className: "newTabContent" },
            React.createElement(Next, null),
            React.createElement(Resources, null),
            React.createElement(Progress, null),
            React.createElement(Schedule, null))));
};
export default Newtab;
