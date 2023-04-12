//
//  SafariWebExtensionHandler.swift
//  Shared (Extension)
//
//  Created by Nick Burns on 4/10/23.
//

import SafariServices
import os.log

let SFExtensionMessageKey = "message"

class SafariWebExtensionHandler: NSObject, NSExtensionRequestHandling {

    func beginRequest(with context: NSExtensionContext) {
    }

}
