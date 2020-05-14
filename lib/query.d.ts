import Utils from "./utils";
import Lexer from "./lexer";
export declare namespace Query {
    function queryOptions(value: Utils.SourceArray, index: number, metadataContext?: any): Lexer.Token;
    function queryOption(value: Utils.SourceArray, index: number, metadataContext?: any): Lexer.Token;
    function systemQueryOption(value: Utils.SourceArray, index: number, metadataContext?: any): Lexer.Token;
    function customQueryOption(value: Utils.SourceArray, index: number): Lexer.Token;
    function batch(value: Utils.SourceArray, index: number): Lexer.Token;
    function id(value: Utils.SourceArray, index: number): Lexer.Token;
    function expand(value: Utils.SourceArray, index: number, metadataContext?: any): Lexer.Token;
    function expandItem(value: Utils.SourceArray, index: number, metadataContext?: any): Lexer.Token;
    function expandCountOption(value: Utils.SourceArray, index: number): Lexer.Token;
    function expandRefOption(value: Utils.SourceArray, index: number): Lexer.Token;
    function expandOption(value: Utils.SourceArray, index: number): Lexer.Token;
    function expandPath(value: Utils.SourceArray, index: number, metadataContext?: any): Lexer.Token;
    function search(value: Utils.SourceArray, index: number): Lexer.Token;
    function searchExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function searchTerm(value: Utils.SourceArray, index: number): Lexer.Token;
    function searchNotExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function searchOrExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function searchAndExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function searchPhrase(value: Utils.SourceArray, index: number): Lexer.Token;
    function searchWord(value: Utils.SourceArray, index: number): Lexer.Token;
    function searchParenExpr(value: Utils.SourceArray, index: number): Lexer.Token;
    function levels(value: Utils.SourceArray, index: number): Lexer.Token;
    function filter(value: Utils.SourceArray, index: number): Lexer.Token;
    function orderby(value: Utils.SourceArray, index: number): Lexer.Token;
    function orderbyItem(value: Utils.SourceArray, index: number): Lexer.Token;
    function skip(value: Utils.SourceArray, index: number): Lexer.Token;
    function top(value: Utils.SourceArray, index: number): Lexer.Token;
    function format(value: Utils.SourceArray, index: number): Lexer.Token;
    function inlinecount(value: Utils.SourceArray, index: number): Lexer.Token;
    function select(value: Utils.SourceArray, index: number): Lexer.Token;
    function selectItem(value: Utils.SourceArray, index: number): Lexer.Token;
    function allOperationsInSchema(value: Utils.SourceArray, index: number): number;
    function selectProperty(value: Utils.SourceArray, index: number): Lexer.Token;
    function selectPath(value: Utils.SourceArray, index: number): Lexer.Token;
    function qualifiedActionName(value: Utils.SourceArray, index: number): Lexer.Token;
    function qualifiedFunctionName(value: Utils.SourceArray, index: number): Lexer.Token;
    function skiptoken(value: Utils.SourceArray, index: number): Lexer.Token;
    function aliasAndValue(value: Utils.SourceArray, index: number): Lexer.Token;
}
export default Query;
