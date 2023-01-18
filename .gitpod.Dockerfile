FROM gitpod/workspace-full-vnc:latest

USER gitpod

# Install Cypress dependencies.
RUN sudo apt-get update \
 && sudo DEBIAN_FRONTEND=noninteractive apt-get install -yq \
   libfuse2 \
   fuse \
   libatk-bridge2.0-0 \
   libcups2 \
   libdrm2 \
   libgtk-3-0 \
   libgbm1 \
   gnome-calculator\
   geany\
 && sudo rm -rf /var/lib/apt/lists/*
 