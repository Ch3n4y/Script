var response_body = $response["body"];
var request_url = $request["url"];
if (request_url.indexOf("/user/my-center") != -1) {
    response_body = $response["body"].replace(/\"deadline_date\"\:\".*?\"/g, '"deadline_date":"2099-12-31"').replace(/\"vip_privilege_desc\"\:\".*?\"/g, '"vip_privilege_desc":"白嫖终身VIP,无广告、可下载"').replace(/\"year_vip_show\"\:\".*?\"/g, '"year_vip_show":"1"').replace(/\"vip_show_type\"\:\".*?\"/g, '"vip_show_type":"40"').replace(/\"is_vip\"\:\".*?\"/g, '"is_vip":"1"')
} else if (request_url.indexOf("/login/tourist") != -1) {
    response_body = $response["body"].replace(/\"is_vip\"\:\".*?\"/g, '"is_vip":"1"')
} else if (request_url.indexOf("/user/get-role-adv-vip-info") != -1) {
    response_body = $response["body"].replace(/\"year_vip_show\"\:\".*?\"/g, '"year_vip_show":"1"').replace(/\"isvip\"\:\".*?\"/g, '"isvip":"1"').replace(/\"isLifetimeVip\"\:\".*?\"/g, '"isLifetimeVip":"1"').replace(/\"type\"\:\".*?\"/g, '"type":"40"')
} else if (request_url.indexOf("/bookshelf-adv/index") != -1) {
    response_body = $response["body"].replace(/\"list\"\:\[.*?\]/g, '"list":[]')
} else if (request_url.indexOf("/user/page") != -1) {
    response_body = $response["body"].replace(/\"year_vip_show\"\:\".*?\"/g, '"year_vip_show":"1"').replace(/\"is_vip\"\:\".*?\"/g, '"is_vip":"1"')
} else if (request_url.indexOf("/book/download") != -1) {
    response_body = $response["body"].replace(/\"list\"\:\[.*?\]/g, '"list":[]')
} else if (request_url.indexOf("/reader-adv/index") != -1) {
    response_body = $response["body"].replace(/\"reader_chapter_list\"\:\[.*?\]/g, '"reader_chapter_list":[]').replace(/\"reader_getcoin\"\:\[.*?\]/g, '"reader_getcoin":[]').replace(/\"reader_bottom_list\"\:\[.*?\]/g, '"reader_bottom_list":[]').replace(/\"reader_page_turn_list\"\:\[.*?\]/g, '"reader_page_turn_list":[]').replace(/\"reader_noad\"\:\[.*?\]/g, '"reader_noad":[]').replace(/\"reader_inchapter\"\:\[.*?\]/g, '"reader_inchapter":[]').replace(/\"feedback\"\:\[.*?\]/g, '"feedback":[]')
} else if (request_url.indexOf("/voice-adv/index") != -1) {
    response_body = $response["body"].replace(/\"voice_top\"\:\[.*?\]/g, '"voice_top":[]').replace(/\"voice_bottom\"\:\[.*?\]/g, '"voice_bottom":[]')
} else if (request_url.indexOf("/get-player-info") != -1) {
    response_body = $response["body"].replace(/\"voice_list\"\:\[.*?\]/g, '"voice_list":[]')
} else if (request_url.indexOf("/init-adv/index") != -1) {
    response_body = $response["body"].replace(/\"coopenHighList\"\:\[.*?\]/g, '"coopenHighList":[]')
} else if (request_url.indexOf("/bookshelf-adv/index") != -1) {
    response_body = $response["body"].replace(/\"bookshelf\"\:\[.*?\]/g, '"bookshelf":[]')
}
$done({
    body: response_body
});