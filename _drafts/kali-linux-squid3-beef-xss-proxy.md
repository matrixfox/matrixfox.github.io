---
layout: post
title: Kali Linux Beef-XSS Squid3 Proxy
meta: Getting Started Pros Gets by Anti-Virus Software Supports multiple devices that support Javascript Cons 777 in web dictionary Comment Injection Only Unencrypted Browsing Robust Server / Performance Latency
posted: 2015-12-08
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
	<li>Comment Injection</li>
	<li>Only Unencrypted Browsing (HTTP)</li>
	<li>Robust Server / Performance Latency</li>
</ul>

<section style="padding-bottom:1em;">
<code>apt-get update</code><br>
<code>apt-get dist-upgrade</code><br>
<code>apt-get -y install squid3</code><br>

<code># kate -> Open: /etc/squid3/squid.conf</code><br>
<code># Edit (Line 588): acl localnet src 192.168.0.0/16</code><br>
<code># Edit (Line 644): http_access allow localnet</code><br>
<code># Edit (Line 868): http_port 3128 transparent</code><br>
<code># Add (Line: *end*): url_rewrite_program /root/poison.pl</code><br>
<code># Save</code><br>

<code>chmod 755 *pl</code><br>
<code>ls -l *pl</code><br>

<code>mkdir /var/www/html/tmp</code><br>
<code>chown nobody:nogroup /var/www/html/tmp</code><br>
<code>chmod 777 /var/www/html/tmp</code><br>
<code>service apache2 restart</code><br>
<code>service squid3 restart</code><br>
<code>clear</code>
</section>

<h3 style="padding-bottom:1em;">Squid3 Poison Pearl Script</h3>

<script src="https://gist.github.com/matrixfox/790e489506105c33f797.js"></script>

<h3 style="padding-bottom:1em;">JavaScript Payload</h3>
<script src="https://gist.github.com/matrixfox/541e1e9ca79aa54f42da.js"></script>
