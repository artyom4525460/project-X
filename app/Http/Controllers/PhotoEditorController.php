<?php

namespace App\Http\Controllers;

use App\Models\PhotoEditor;
use Illuminate\Http\Request;

class PhotoEditorController extends Controller
{

    public function get($code)
    {
        if($result = PhotoEditor::where('code', $code)->first()){
            return $result->data;
        }
        return false;
    }
    
    public function add($code, Request $request)
    {
        $item = new PhotoEditor();
        $item->code = $code;
        $item->data = $request->data;
        return $item->save();
    }
}
