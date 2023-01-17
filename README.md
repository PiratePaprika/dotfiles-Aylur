# My Dotfiles

<img src="https://github.com/Aylur/dotfiles/blob/main/media/rose.png">

## Extensions
- [ArcMenu](https://extensions.gnome.org/extension/3628/arcmenu/)
- [Aylur's Widgets](https://extensions.gnome.org/extension/5338/aylurs-widgets/)
- [Floating Panel](https://extensions.gnome.org/extension/5514/floating-panel/)
- [Just Perfection](https://extensions.gnome.org/extension/3843/just-perfection/)
- [Rounded Window Corners](https://extensions.gnome.org/extension/5237/rounded-window-corners/)
- [User Themes](https://extensions.gnome.org/extension/19/user-themes/)

## Icon Pack

[Qogir](https://github.com/vinceliuice/Qogir-icon-theme)

## Install and apply theme

```
git clone https://github.com/Aylur/dotfiles.git
cd dotfiles/themes/
cp -r Rose/ ~/.local/themes
dconf write /org/gnome/shell/extensions/user-theme/name "'Rose'"
```

## Adding Background to workspace switcher and ArcMenu runner

```css
/*
I recommend ~/.config/background, because
if you set your bg with nautilus, it will put it there.
*/
.arcmenu-menu > * > * > * > * > *:first-child,
.workspace-thumbnail{
  background-image: url("/home/user/.config/background");
  background-size: cover;
}
```
Add this into:

`~/.local/share./gnome-shell/extensions/user-theme@gnome-shell-extensions.gcampax.github.com/stylesheet.css`

## GTK

Use [Gradience](https://flathub.org/apps/details/com.github.GradienceTeam.Gradience) and [adw-gtk3](https://github.com/lassekongo83/adw-gtk3) for setting the color scheme to gtk apps