---
layout: post
title: Kali Linux Squid3 Beef-XSS Proxy
meta:
posted:
category: blog
draft: true
---

<h3>Getting Started</h3>

Pros
<ul>
	<li>Gets by Anti-Virus Software</li>
	<li>Supports multiple devices that support Javascript</li>
</ul>

Cons
<ul>
	<li>777 in web dictionary</li>
	<li>Comment Injection</li>
	<li>Only Unencrypted Browsing</li>
	<li>Robust Server / Performance Latency</li>
</ul>


<code>apt-get update</code>
<code>apt-get dist-upgrade</code>
<code>apt-get -y install squid3</code>

<code># kate -> Open: /etc/squid3/squid.conf</code>
<code># Edit (Line 588): acl localnet src 192.168.0.0/16</code>
<code># Edit (Line 644): http_access allow localnet</code>
<code># Edit (Line 868): http_port 3128 transparent</code>
<code># Add (Line: &#42end&#42): url_rewrite_program /root/poison.pl</code>
<code># Save</code>

<code>chmod 755 *pl</code>
<code>ls -l *pl</code>

<code>mkdir /var/www/html/tmp</code>
<code>chown nobody:nogroup /var/www/html/tmp</code>
<code>chmod 777 /var/www/html/tmp</code>
<code>service apache2 restart</code>
<code>service squid3 restart</code>
<code>clear</code>

<h3 style=\"padding-bottom:15px;\">Squid3 Poison Pearl Script</h3>
<script src=\"https://gist.github.com/matrixfox/790e489506105c33f797.js\"></script>

<h3 style=\"padding-bottom:15px;\">JavaScript Payload</h3>
<script src=\"https://gist.github.com/matrixfox/541e1e9ca79aa54f42da.js\"></script>
