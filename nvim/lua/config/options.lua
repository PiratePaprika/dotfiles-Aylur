local o = vim.opt

o.wrap = true
o.linebreak = true
o.conceallevel = 0
o.cursorline = false
o.number = true -- Print line number
o.relativenumber = true -- Relative line numbers
o.hlsearch = false -- highlight search
o.incsearch = true -- incremental search
o.scrolloff = 4 -- scroll offset
o.clipboard = "unnamedplus" -- sync clipboard with os
o.breakindent = true
o.inccommand = "split"
o.undofile = true
o.undolevels = 10000
o.updatetime = 200 -- Save swap file and trigger CursorHold
o.tabstop = 4
o.softtabstop = 4
o.shiftwidth = 4
o.expandtab = true
o.termguicolors = true
o.swapfile = false
o.completeopt = "menu,menuone,preview"

vim.cmd("colorscheme nucharm")
