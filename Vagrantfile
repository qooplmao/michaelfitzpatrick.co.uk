# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
    config.vm.box = "bento/ubuntu-16.04"
    config.vm.network "private_network", ip: "192.168.14.11"
    config.vm.hostname = "gatsby.mf1.co.uk.loc"

    config.hostmanager.enabled = true
    config.hostmanager.manage_host = true

    config.vm.synced_folder ".", "/vagrant",
    	:nfs => (RUBY_PLATFORM =~ /linux/ or RUBY_PLATFORM =~ /darwin/)

    config.vm.provider "virtualbox" do |v|
        v.name = "personal-gatsby.mf1"

        v.memory = 2048
    end

    config.vm.provision :shell,
        inline: <<-SHELL
            # update
            apt-get -qq update

            # install build dependencies
            apt-get install -y curl

            # install node and npm
            curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
            apt-get update -qq
            apt-get install -y nodejs
            npm config set registry http://registry.npmjs.org/
            npm install -g npm

            # install yarn for quick build with bower and ember-cli
            curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
            echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
            apt-get update -qq
            apt-get install -y yarn
            yarn global add phantomjs-prebuilt \
                            --prefix /usr/local

            if ! grep -q '. /home/vagrant/.bash_custom' /home/vagrant/.bashrc ; then
                (
                    echo "if [ -f /home/vagrant/.bash_custom ]; then"
                    echo "    . /home/vagrant/.bash_custom"
                    echo "fi"
                ) >> /home/vagrant/.bashrc
            fi

            (
                echo "# automatically start an SSH session in the synced directory"
                echo "cd /vagrant"
            ) > /home/vagrant/.bash_custom
        SHELL

    config.vm.provision :shell,
        run: "always",
        privileged: false,
        inline: <<-SHELL
            # start in root directory
            cd /vagrant

            # install all yarn packages
            echo "installing yarn packages" && yarn install && yarn upgrade
        SHELL
end
