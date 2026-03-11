{
  outputs = inputs: {
    nixosConfigurations = {
      "nixos" = import ./system/nixos inputs;
    };
  };

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-25.11";
    home-manager = {
      url = "github:nix-community/home-manager/release-25.11";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    neovim-nightly-overlay = {
      url = "github:nix-community/neovim-nightly-overlay";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    vault = {
      url = "git+ssh://git@github.com/aylur/vault";
      flake = false;
    };
    marble-shell = {
      url = "git+ssh://git@github.com/Aylur/marble-shell";
    };
    firefox-gnome-theme = {
      url = "github:rafaelmardojai/firefox-gnome-theme";
      flake = false;
    };
    solaar = {
      url = "github:Svenum/Solaar-Flake/main";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };
}
