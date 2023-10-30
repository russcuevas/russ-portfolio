import React, { useEffect } from 'react';

const FacebookChat = () => {
    useEffect(() => {
        // Load Facebook SDK and initialize chat plugin
        window.fbAsyncInit = function () {
            window.FB.init({
                xfbml: true,
                version: 'v18.0'
            });
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    }, []);

    useEffect(() => {
        // Set up page_id and attribution for the chat plugin
        var chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "145223862010778");
        chatbox.setAttribute("attribution", "biz_inbox");
    }, []);

    return (
        <div>
            {/* Messenger Chat Plugin Code */}
            <div id="fb-root"></div>

            {/* Your Chat Plugin code */}
            <div id="fb-customer-chat" className="fb-customerchat"></div>
        </div>
    );
};

export default FacebookChat;
