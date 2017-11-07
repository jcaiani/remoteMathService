/*
 * Joseph Caiani
 * Debugging/Testing RemoteMathService Problem for Red Hat
 */

import { expect } from 'chai';
import { remoteMathService, callOneService, callTwoService } from '../dist/RemoteMathService';

describe('RemoteMathService', () => {

    describe('callOneService', () => {
        it('is available', () => {
            expect(callOneService).not.to.be.null;
        });
        it('returns a value of 2', (done) => {
            callTwoService((err, val) => {
                expect(val).to.equal(2);
                if (err) done(err);
                else done();
            });
        });
    });

    describe('callTwoService', () => {
        it('is available', () => {
            expect(callTwoService).not.to.be.null;
        });
        it('returns a value of 2', (done) => {
            callTwoService((err, val) => {
                expect(val).to.equal(2);
                if (err) done(err);
                else done();
            });
        });
    });

    describe('remoteMathService', () => {
        it('is available', () => {
            expect(remoteMathService).not.to.be.null;
        });
        it ('returns without error', (done) => {
            remoteMathService((err, val) => {
                expect(err).to.be.null;
                if (err) done(err);
                else done();
            });
        });
        it ('returns the correct value of 3', (done) => {
            remoteMathService((err, val) => {
                expect(val).to.equal(3);
                if (err) done(err);
                else done();
            });
        });
    });
});