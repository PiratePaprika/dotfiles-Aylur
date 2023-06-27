// static windows
var dock = monitor => ({
    monitor,
    name: `dock${monitor}`,
    anchor: ['bottom'],
    child: { type: 'dock' },
});

var notifications = monitor => ({
    monitor,
    name: `notifications${monitor}`,
    anchor: ['top'],
    child: { type: 'notifications/popups' },
});

var windowcorners = monitor => ({
    monitor,
    name: `corner${monitor}`,
    anchor: ['top', 'bottom', 'left', 'right'],
    child: { type: 'corners' },
    className: 'window-corner',
    layer: 'bottom',
});

var desktop = (monitor, wallpapers) => ({
    monitor,
    name: `desktop${monitor}`,
    anchor: ['top', 'bottom', 'left', 'right'],
    child: { type: 'desktop', wallpapers },
    layer: 'background',
});

var indicator = (monitor) => ({
    monitor,
    name: `indicator${monitor}`,
    className: 'indicator',
    anchor: ['right'],
    child: { type: 'on-screen-indicator/vertical' },
})

// bar
const separator = {
    type: 'box',
    className: 'separator',
    valign: 'center',
}

const launcher = {
    type: 'button',
    className: 'launcher',
    onClick: () => ags.App.toggleWindow('overview'),
    child: '',
}

const left = {
    type: 'box',
    halign: 'start',
    className: 'left',
    children: [
        launcher,
        separator,
        { type: 'datemenu/panel-button' },
        separator,
        { type: 'workspaces' },
        separator,
        { type: 'client' },
    ],
};

const center = {
    type: 'box',
    className: 'center',
    children: [
        { type: 'media/panel-button' },
    ],
};

const right = {
    type: 'box',
    className: 'right',
    hexpand: true,
    halign: 'end',
    children: [
        { type: 'colorpicker' },
        separator,
        { type: 'notifications/popup-label' },
        { type: 'quicksettings/panel-button' },
        separator,
        { type: 'powermenu/panel-button' },
    ],
};

var bar = (monitor) => ({
    name: `bar${monitor}`,
    monitor,
    anchor: ['top', 'left', 'right'],
    exclusive: true,
    child: {
        type: 'centerbox',
        className: 'panel',
        children: [
            left,
            center,
            right,
        ],
    },
});