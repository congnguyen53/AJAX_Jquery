var count = 0
function get_jq_data(){
    while(count<100){
    x = Math.floor((Math.random() * 1000));
    y = Math.floor((Math.random() * 1000));
    URL = "https://b.tile.openstreetmap.org/14/"+x+"/"+y+".png"
    $.ajax({
        url: URL,
        type: 'GET',
        success: function( result ) {

        }
    });
    var real_img='<li><img src="'+ (URL)+'" width="150" height="150" alt="URL"></li>';
    $('#img').append(real_img);
    count = count + 1
    get_jq_data()
    }
}

