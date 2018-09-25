#Steps to start:
.\gradlew clean prepareDocker
 
docker build --tag="oleg-tech-assessment/build:0.1" build/docker/

docker-compose up

#And it's available in browser!
http://localhost:8080/

<table class="tableblock frame-all grid-all spread">
<colgroup>
<col style="width: 33.3333%;">
<col style="width: 33.3333%;">
<col style="width: 33.3334%;">
</colgroup>
<thead>
<tr>
<th class="tableblock halign-left valign-top">HTTP Method</th>
<th class="tableblock halign-left valign-top">URI</th>
<th class="tableblock halign-left valign-top">Grails Action</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock">GET</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">/stories</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">show all</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock">GET</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">/stories/create</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">create</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock">POST</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">/stories</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">save</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock">GET</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">/stories/${id}</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">show</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock">GET</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">/stories/${id}/edit</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">edit</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock">PUT</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">/stories/${id}</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">update</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock">DELETE</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">/stories/${id}</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">delete</p></td>
</tr>
<tbody>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock">GET</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">/storyParts</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">show all</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock">GET</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">/storyParts/create</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">create</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock">POST</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">/storyParts</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">save</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock">GET</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">/storyParts/${id}</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">show</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock">GET</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">/storyParts/${id}/edit</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">edit</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock">PUT</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">/storyParts/${id}</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">update</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock">DELETE</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">/storyParts/${id}</p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">delete</p></td>
</tr>
</tbody>
</tbody>
</table>